//soulution found here:
//http://stackoverflow.com/questions/19844545/replacing-css-file-on-the-fly-and-apply-the-new-style-to-the-page

function changeCSS (cssFile, cssLinkIndex){
  console.log(cssFile, cssLinkIndex);
  var currentLink = document.getElementsByTagName("link").item(cssLinkIndex);
  var newLink = document.createElement("link");
  newLink.setAttribute("rel", "stylesheet");
  newLink.setAttribute("type", "text/css");
  newLink.setAttribute("href", "css/"+cssFile);
  console.log(currentLink, newLink)

  document.getElementsByTagName("head").item(0).replaceChild(newLink, currentLink);


}
