cd \aplicaciones\gsutil
python gsutil -m rsync -R c:\workspace\www.artsilletres.es\web-out gs://www.artsilletres.es
python gsutil -m setmeta -h "Content-Type:text/html; charset=utf-8" gs://www.artsilletres.es/**/*.html

