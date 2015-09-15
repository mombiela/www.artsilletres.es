cd \aplicaciones\gsutil
python gsutil -m rsync -R c:\workspace\www.artsilletres.es\web-out gs://test.artsilletres.es
python gsutil -m setmeta -h "Content-Type:text/plain; charset=utf-8" gs://test.artsilletres.es/**/*.stxt

