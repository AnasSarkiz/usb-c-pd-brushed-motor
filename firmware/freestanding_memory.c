#include <stddef.h>
/* Real freestanding memory operations; no heap, OS, constructors or hosted
 * libc. -fno-builtin prevents these loops from recursively calling themselves. */
void *memcpy(void *destination, const void *source, size_t count) {
  unsigned char *out=destination; const unsigned char *in=source;
  for(size_t i=0;i<count;++i) out[i]=in[i];
  return destination;
}
void *memset(void *destination, int byte, size_t count) {
  unsigned char *out=destination;
  for(size_t i=0;i<count;++i) out[i]=(unsigned char)byte;
  return destination;
}
void __aeabi_memcpy(void *destination, const void *source, size_t count) {
  (void)memcpy(destination,source,count);
}
void __aeabi_memcpy4(void *destination, const void *source, size_t count) {
  (void)memcpy(destination,source,count);
}
void __aeabi_memclr(void *destination, size_t count) { (void)memset(destination,0,count); }
void __aeabi_memclr4(void *destination, size_t count) { (void)memset(destination,0,count); }
