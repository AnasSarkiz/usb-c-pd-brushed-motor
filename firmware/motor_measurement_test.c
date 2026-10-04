#include "motor_measurement.h"
#include <math.h>
#include <stdio.h>
#include <stdlib.h>
static unsigned assertions;
#define CHECK(x) do { ++assertions; if (!(x)) { fprintf(stderr,"%s:%d:%s\n",__FILE__,__LINE__,#x); exit(1); } } while(0)
int main(void) {
  /* Explicit synthetic qualification for arithmetic tests. No manufacturing
   * profile is created or approved by these test vectors. */
  struct motor_measurement_profile p={.approved=true,.qualification_id=1,.factory_vref=1650,
    .adc_error_half_counts=14,.factory_error_half_counts=14,.noise_half_counts=4,
    .upper_divider_ppm=6000,.lower_divider_ppm=8100,.reference_drift_ppm=9000,
    .leakage_na=70,.filter_tau_us=1100};
  struct motor_adc_sample f={.valid=true,.factory_vref=1650,.vrefint=1500,
    .started_us=1000,.channel_started_us={1030,1055,1005},.channel_completed_us={1050,1075,1025},.completed_us=1080};
  struct motor_measurement_context c={.profile=&p,.now_us=1085,
    .reference_stable=true,.environment_qualified=true};
  for(unsigned n=0;n<4095;++n) {
    f.vbus=f.vm=n;
    struct motor_measurement r=motor_measurement_convert(&f,&c);
    CHECK(r.valid && r.vbus.valid && r.motor_rail.valid); CHECK(r.oldest_sample_us==1000);
    for(int sign=-1;sign<=1;sign+=2) {
      long double reference=(long double)3000 + sign*10;
      long double factory=(long double)1650 + sign*7;
      long double measured_ref=(long double)1500-sign*9;
      long double drift=1.0L+sign*0.009L;
      long double gain=1.0L+100000.0L*(1.0L+sign*0.006L)/
        (10000.0L*(1.0L-sign*0.0081L));
      long double physical=fmaxl(0.0L,((long double)n+sign*9)*reference*factory/
        measured_ref/4096.0L*drift*gain+sign*0.00007L*100600.0L);
      CHECK((long double)r.vbus.lower_mv<=physical);
      CHECK(physical<=(long double)r.vbus.upper_mv);
    }
  }
  f.vm=1350; f.vbus=2250;
  struct motor_measurement baseline=motor_measurement_convert(&f,&c);
  p.rail_slew_uv_per_us[0]=1000; p.rail_slew_uv_per_us[1]=2000;
  p.vdda_slew_uv_per_us=5;
  struct motor_measurement moving=motor_measurement_convert(&f,&c);
  CHECK(moving.valid); CHECK(moving.vbus.lower_mv<baseline.vbus.lower_mv);
  CHECK(moving.motor_rail.upper_mv>baseline.motor_rail.upper_mv+2000);
  c.now_us=6001; CHECK(!motor_measurement_convert(&f,&c).valid); c.now_us=1085;
  p.approved=false; CHECK(!motor_measurement_convert(&f,&c).valid); p.approved=true;
  c.brownout=true; CHECK(!motor_measurement_convert(&f,&c).valid); c.brownout=false;
  c.environment_qualified=false; CHECK(!motor_measurement_convert(&f,&c).valid);
  c.environment_qualified=true; c.reference_stable=false;
  CHECK(!motor_measurement_convert(&f,&c).valid); c.reference_stable=true;
  f.factory_vref=1649; CHECK(!motor_measurement_convert(&f,&c).valid); f.factory_vref=1650;
  f.vrefint=0; CHECK(!motor_measurement_convert(&f,&c).valid); f.vrefint=1500;
  f.vbus=4095; CHECK(!motor_measurement_convert(&f,&c).valid); f.vbus=2250;
  f.channel_started_us[1]=1024; CHECK(!motor_measurement_convert(&f,&c).valid);
  f.started_us=UINT32_MAX-79; f.channel_started_us[2]=UINT32_MAX-74; f.channel_completed_us[2]=UINT32_MAX-54;
  f.channel_started_us[0]=UINT32_MAX-49; f.channel_completed_us[0]=UINT32_MAX-29;
  f.channel_started_us[1]=UINT32_MAX-24; f.channel_completed_us[1]=UINT32_MAX-4;
  f.completed_us=0; c.now_us=5;
  struct motor_measurement rolled=motor_measurement_convert(&f,&c);
  CHECK(rolled.valid && rolled.oldest_sample_us==UINT32_MAX-79);
  c.now_us=UINT32_MAX-80; CHECK(!motor_measurement_convert(&f,&c).valid);
  puts("Qualified measurement interval arithmetic tests passed");
  printf("%u assertions\n",assertions);
}
