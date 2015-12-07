# Our website

This is the repository for out website, if you take a look [here](https://github.com/DriveAI/Website/tree/markdownsite/site/docs), you'll see a bunch of markdown files. We're using a framework called [MkDocs](http://www.mkdocs.org/). It allows anyone on our team to quickly add information to our website. 

If you want to add info to the website you can do so simply by editing the markdown here and creating a pull request. If you want to download the framework itself you can simply execute the following commands.

```
 pip install mkdocs
```

Aaand you're done. Of course you need to have python & pip installed as well.

From here you can do 

```
mkdocs serve
```

to serve the site locally. 

```
mkdocs build --clean 
```

to clean (you need to do this sometimes, it should prompt you when it's required.
