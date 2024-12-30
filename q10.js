/**Symbol Comparison:**
    Write code to:
    - Declare two symbols with the same description (`"key"`).  
    - Compare them using `===` and print the result.*/
    const a = Symbol(`"key"`)
    const b = Symbol(`"key"`)
    console.log(a===b)
//the code will print false