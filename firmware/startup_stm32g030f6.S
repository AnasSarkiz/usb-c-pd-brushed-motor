.syntax unified
.cpu cortex-m0plus
.thumb
.section .isr_vector,"a",%progbits
.global motor_vectors
motor_vectors:
  .word _estack, Reset_Handler, Default_Handler, Default_Handler
  .word 0,0,0,0,0,0,0,Default_Handler,0,0,Default_Handler,Default_Handler
  /* IRQ0..31 positions independently checked against ST device enumeration. */
  .word Default_Handler,0,Default_Handler,Default_Handler
  .word Default_Handler,Default_Handler,Default_Handler,EXTI4_15_IRQHandler
  .word 0,Default_Handler,Default_Handler,Default_Handler
  .word Default_Handler,Default_Handler,Default_Handler,0
  .word TIM3_IRQHandler,0,0,Default_Handler
  .word 0,Default_Handler,Default_Handler,Default_Handler
  .word Default_Handler,Default_Handler,Default_Handler,Default_Handler
  .word Default_Handler,0,0,0
.section .text.Reset_Handler,"ax",%progbits
.thumb_func
.global Reset_Handler
Reset_Handler:
  cpsid i
  ldr r0,=_sidata
  ldr r1,=_sdata
  ldr r2,=_edata
1:
  cmp r1,r2
  bcs 2f
  ldr r3,[r0]
  str r3,[r1]
  adds r0,r0,#4
  adds r1,r1,#4
  b 1b
2:
  ldr r1,=_sbss
  ldr r2,=_ebss
  movs r3,#0
3:
  cmp r1,r2
  bcs 4f
  str r3,[r1]
  adds r1,r1,#4
  b 3b
4:
  bl motor_main
  b Default_Handler
.section .text.Default_Handler,"ax",%progbits
.thumb_func
.global Default_Handler
Default_Handler:
  cpsid i
  bl motor_emergency_halt
  b Default_Handler
.section .note.GNU-stack,"",%progbits
