# string-split-keep

Split strings without applying separator after limit; Negative limit starts from the end. No regex separators.

```js
	var ssplit = require("string-split-keep")  
	  
	ssplit("word1 word2 word3", " ", 2) //["word1", "word2 word3"]  
	ssplit("word1 word2 word3", " ", -2) //["word1 word2", "word3"]

```  
		






