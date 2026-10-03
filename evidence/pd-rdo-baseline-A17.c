#include "pd_policy.h"
#include <stdio.h>
int main(void) {
  const uint32_t caps[]={(100u<<10)|300u,(300u<<10)|300u,(400u<<10)|500u};
  struct pd_plan plan=pd_make_plan(2,caps,3,77);
  struct pd_observation observation={.attached=true,.communication_ok=true,
    .fresh_ps_rdy=true,.pe_fsm_state=0x18,.source_generation=77,
    .rdo=(3u<<28)|(300u<<10)|500u,.vbus_mv=20000,.motor_rail_mv=12000};
  const int five_amp_source=pd_contract_qualified(&plan,&observation);
  printf("Matched5A source,3A operating/5A maximum: expected1 actual%d\n",five_amp_source);
  observation.rdo=(3u<<28)|(300u<<10)|300u;
  const uint32_t reserved_bits[]={1u<<31,1u<<23,1u<<22,1u<<21,1u<<20};
  unsigned failures=!five_amp_source;
  for (unsigned i=0;i<5;++i) {
    observation.rdo |= reserved_bits[i];
    const int qualified=pd_contract_qualified(&plan,&observation);
    printf("RDO reserved0x%08lx: expected0 actual%d\n",(unsigned long)reserved_bits[i],qualified);
    failures+=qualified;
    observation.rdo &= ~reserved_bits[i];
  }
  printf("Baseline mismatches:%u\n",failures);
  return failures ? 1 : 0;
}
