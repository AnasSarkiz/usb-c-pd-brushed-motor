from pathlib import Path
import json,re,subprocess,concurrent.futures,hashlib
parts=json.loads(Path('docs/design-manifest.json').read_text())
ids=sorted({p['code'] for p in parts})
def get(code):
 raw=subprocess.run(['curl','-L','--max-time','25','-s','https://www.lcsc.com/product-detail/'+code+'.html'],capture_output=True,text=True).stdout
 stock=re.search(r'"stockNumber":(\d+)',raw)
 package=re.search(r'"encapStandard":"([^"]+)"',raw)
 title=re.search(r'<title>(.*?)</title>',raw)
 model=re.search(r'"productModel":"([^"]+)"',raw)
 brand=re.search(r'"brandNameEn":"([^"]+)"',raw)
 if not brand:brand=re.search(r'"manufacturerName":"([^"]+)"',raw)
 pdfs=re.findall(r'https://datasheet.lcsc.com/[^"\s<>]+\.pdf[^"\s<>]*',raw)
 record={'code':code,'date':'2026-10-02','url':'https://www.lcsc.com/product-detail/'+code+'.html','stock':int(stock[1]) if stock else None,'title':title[1] if title else None,'mpn':model[1] if model else None,'manufacturer':brand[1] if brand else None,'package':package[1] if package else None,'datasheet_url':pdfs[0] if pdfs else None,'page_sha256':hashlib.sha256(raw.encode()).hexdigest()}
 Path('evidence/supplier-'+code+'.json').write_text(json.dumps(record,indent=2)+'\n')
 return record
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
 rows=list(pool.map(get,ids))
Path('evidence/supplier-availability-A1.json').write_text(json.dumps(rows,indent=2)+'\n')
for r in rows:print(r['code'],r['stock'],r['title'],flush=True)
