# react-router
practicing react router

1. basic routing
2. URL Query Params Usage - filter/paging

## basic routing
React-router provides serveral component to implement the routing between website pages, basically there are three types:
1. Router - each router is designed for different purpose e.g. BrowserRouter use DOM history APi and used for website
2. Route - define the relationship between path and component/page
3. Link - <a> element  to navigate another page/component

### Route Hierarchy
There are two types of path : relative path and absolute path. Both types are accepted in both Route and Link.
For example: you can design a nested Route like this
```
<Route path="/contact" ...>
  <Route path=":id" .../>   //equals to "/contact/:id"
  <Route path=":id/edit" .../>  //equals to "/contact/:id/edit"
</Route>
```

In the Link component, relative path is also allowed.
For example, using the above Route setting...
```
<Link to=".." >Go Back</Link>  //this will navigate to /contact
```

However, in reality situation, "Go Back" Link should be able to navigate to "/contact/:id"
To achieve this purpose, we can define props - relative="path" like this:
```
<Link to=".." relative="path" >Go Back</Link>  //this will navigate to /contact/:id
```
