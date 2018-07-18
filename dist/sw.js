const staticCache="rest-reviews-1.1.0",ImagesCache="mws-images",allCaches=[staticCache,ImagesCache],urlsToCache=["/","/index.html","/restaurant.html","/css/styles.css","/js/restaurant_info.js","/js/main.js","/js/dbhelper.js","/js/vendor/idb.js","/manifest.json","/assets/icon/favicon.png"];function serveImg(e){const t=e.url.replace(/-.*\.(jpg|webp)/,"");return caches.open(ImagesCache).then(function(n){return n.match(t).then(function(s){return s?(console.log(`${t} 💻`),s):fetch(e).then(function(e){return 200==e.status&&n.put(t,e.clone()),console.log(`${t} 🌎`),e})})})}self.addEventListener("install",function(e){console.log("== INSTALLING =="),e.waitUntil(caches.open(staticCache).then(function(e){return console.log("-- SW Installed --"),e.addAll(urlsToCache).then(()=>{console.log(" -*- URLs added to Cache -*-")})}).catch(function(e){console.log("Error adding all to cache, ",e)}))}),self.addEventListener("fetch",e=>{const t=new URL(e.request.url);t.origin===location.origin&&t.pathname.startsWith("/assets/img")?e.respondWith(serveImg(e.request)):e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)).catch(e=>console.log("Match error, ",e)))}),self.addEventListener("activate",function(e){console.log("New Service Worker activating");const t=[staticCache];e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return e.startsWith("rest-reviews-")&&e!=staticCache}).map(function(e){if(-1===t.indexOf(e))return caches.delete(e)}))}))});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3LmpzIl0sIm5hbWVzIjpbInN0YXRpY0NhY2hlIiwiSW1hZ2VzQ2FjaGUiLCJhbGxDYWNoZXMiLCJ1cmxzVG9DYWNoZSIsInNlcnZlSW1nIiwicmVxdWVzdCIsInN0b3JhZ2VVcmwiLCJ1cmwiLCJyZXBsYWNlIiwiY2FjaGVzIiwib3BlbiIsInRoZW4iLCJjYWNoZSIsIm1hdGNoIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJuZXR3b3JrUmVzcG9uc2UiLCJzdGF0dXMiLCJwdXQiLCJjbG9uZSIsInNlbGYiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ3YWl0VW50aWwiLCJhZGRBbGwiLCJjYXRjaCIsImVycm9yIiwicmVxdWVzdFVSTCIsIlVSTCIsIm9yaWdpbiIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwicmVzcG9uZFdpdGgiLCJjYWNoZVdoaXRlbGlzdCIsImtleXMiLCJjYWNoZU5hbWVzIiwiUHJvbWlzZSIsImFsbCIsImZpbHRlciIsImNhY2hlTmFtZSIsIm1hcCIsImluZGV4T2YiLCJkZWxldGUiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFlBQWMscUJBQ2RDLFlBQWMsYUFDZEMsV0FDSkYsWUFDQUMsYUFFSUUsYUFDSixJQUNBLGNBQ0EsbUJBQ0Esa0JBQ0EseUJBQ0EsY0FDQSxrQkFDQSxvQkFDQSxpQkFDQSw0QkF5Q0YsU0FBU0MsU0FBU0MsR0FDaEIsTUFBTUMsRUFBYUQsRUFBUUUsSUFBSUMsUUFBUSxrQkFBbUIsSUFFMUQsT0FBT0MsT0FBT0MsS0FBS1QsYUFBYVUsS0FBSyxTQUFVQyxHQUM3QyxPQUFPQSxFQUFNQyxNQUFNUCxHQUFZSyxLQUFLLFNBQVVHLEdBQzVDLE9BQUlBLEdBQ0ZDLFFBQVFDLE9BQU9WLFFBQ1JRLEdBR0ZHLE1BQU1aLEdBQVNNLEtBQUssU0FBVU8sR0FLbkMsT0FKOEIsS0FBMUJBLEVBQWdCQyxRQUNsQlAsRUFBTVEsSUFBSWQsRUFBWVksRUFBZ0JHLFNBRXhDTixRQUFRQyxPQUFPVixRQUNSWSxRQXJEZkksS0FBS0MsaUJBQWlCLFVBQVcsU0FBVUMsR0FFekNULFFBQVFDLElBQUksb0JBQ1pRLEVBQU1DLFVBQ0poQixPQUFPQyxLQUFLVixhQUNYVyxLQUFLLFNBQVVDLEdBRWQsT0FEQUcsUUFBUUMsSUFBSSxzQkFDTEosRUFBTWMsT0FBT3ZCLGFBQ2pCUSxLQUFLLEtBQ0pJLFFBQVFDLElBQUksb0NBR2pCVyxNQUFNLFNBQVVDLEdBQ2ZiLFFBQVFDLElBQUksOEJBQStCWSxRQUtqRE4sS0FBS0MsaUJBQWlCLFFBQVVDLElBRTlCLE1BQU1LLEVBQWEsSUFBSUMsSUFBSU4sRUFBTW5CLFFBQVFFLEtBRXJDc0IsRUFBV0UsU0FBV0MsU0FBU0QsUUFDN0JGLEVBQVdJLFNBQVNDLFdBQVcsZUFDakNWLEVBQU1XLFlBQVkvQixTQUFTb0IsRUFBTW5CLFVBTXJDbUIsRUFBTVcsWUFDSjFCLE9BQU9JLE1BQU1XLEVBQU1uQixTQUNsQk0sS0FBTUcsR0FBYUEsR0FBWUcsTUFBTU8sRUFBTW5CLFVBQzNDc0IsTUFBTUMsR0FBU2IsUUFBUUMsSUFBSSxnQkFBaUJZLE9BMkJqRE4sS0FBS0MsaUJBQWlCLFdBQVksU0FBVUMsR0FDMUNULFFBQVFDLElBQUksaUNBQ1osTUFBTW9CLEdBQWtCcEMsYUFFeEJ3QixFQUFNQyxVQUNKaEIsT0FBTzRCLE9BQU8xQixLQUFLLFNBQVUyQixHQUMzQixPQUFPQyxRQUFRQyxJQUNiRixFQUNDRyxPQUFPLFNBQVVDLEdBQ2hCLE9BQ0VBLEVBQVVSLFdBQVcsa0JBQW9CUSxHQUFhMUMsY0FHekQyQyxJQUFJLFNBQVUvQixHQUNiLElBQXVDLElBQW5Dd0IsRUFBZVEsUUFBUWhDLEdBQ3pCLE9BQU9ILE9BQU9vQyxPQUFPakMiLCJmaWxlIjoic3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdGF0aWNDYWNoZSA9IFwicmVzdC1yZXZpZXdzLTEuMS4wXCI7XG5jb25zdCBJbWFnZXNDYWNoZSA9IFwibXdzLWltYWdlc1wiO1xuY29uc3QgYWxsQ2FjaGVzID0gW1xuICBzdGF0aWNDYWNoZSxcbiAgSW1hZ2VzQ2FjaGVcbl1cbmNvbnN0IHVybHNUb0NhY2hlID0gW1xuICBcIi9cIixcbiAgXCIvaW5kZXguaHRtbFwiLFxuICBcIi9yZXN0YXVyYW50Lmh0bWxcIixcbiAgXCIvY3NzL3N0eWxlcy5jc3NcIixcbiAgXCIvanMvcmVzdGF1cmFudF9pbmZvLmpzXCIsXG4gIFwiL2pzL21haW4uanNcIixcbiAgXCIvanMvZGJoZWxwZXIuanNcIixcbiAgXCIvanMvdmVuZG9yL2lkYi5qc1wiLFxuICBcIi9tYW5pZmVzdC5qc29uXCIsXG4gIFwiL2Fzc2V0cy9pY29uL2Zhdmljb24ucG5nXCIsXG5dO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gY2FjaGUgcmVzcG9uc2VzIHRvIHJlcXVlc3RzIGZvciBzaXRlIGFzc2V0c1xuICBjb25zb2xlLmxvZygnPT0gSU5TVEFMTElORyA9PScpO1xuICBldmVudC53YWl0VW50aWwoXG4gICAgY2FjaGVzLm9wZW4oc3RhdGljQ2FjaGUpXG4gICAgLnRoZW4oZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICBjb25zb2xlLmxvZygnLS0gU1cgSW5zdGFsbGVkIC0tJyk7XG4gICAgICByZXR1cm4gY2FjaGUuYWRkQWxsKHVybHNUb0NhY2hlKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJyAtKi0gVVJMcyBhZGRlZCB0byBDYWNoZSAtKi0nKTtcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGFkZGluZyBhbGwgdG8gY2FjaGUsIFwiLCBlcnJvcik7XG4gICAgfSlcbiAgKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgKGV2ZW50KSA9PiB7XG5cbiAgY29uc3QgcmVxdWVzdFVSTCA9IG5ldyBVUkwoZXZlbnQucmVxdWVzdC51cmwpO1xuXG4gIGlmIChyZXF1ZXN0VVJMLm9yaWdpbiA9PT0gbG9jYXRpb24ub3JpZ2luKSB7XG4gICAgaWYgKHJlcXVlc3RVUkwucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2Fzc2V0cy9pbWcnKSkge1xuICAgICAgZXZlbnQucmVzcG9uZFdpdGgoc2VydmVJbWcoZXZlbnQucmVxdWVzdCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gIH1cbiAgZXZlbnQucmVzcG9uZFdpdGgoXG4gICAgY2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZSB8fCBmZXRjaChldmVudC5yZXF1ZXN0KSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coJ01hdGNoIGVycm9yLCAnLCBlcnJvcikpXG4gICk7XG59KTtcblxuXG5mdW5jdGlvbiBzZXJ2ZUltZyhyZXF1ZXN0KSB7XG4gIGNvbnN0IHN0b3JhZ2VVcmwgPSByZXF1ZXN0LnVybC5yZXBsYWNlKC8tLipcXC4oanBnfHdlYnApLywgJycpO1xuXG4gIHJldHVybiBjYWNoZXMub3BlbihJbWFnZXNDYWNoZSkudGhlbihmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICByZXR1cm4gY2FjaGUubWF0Y2goc3RvcmFnZVVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtzdG9yYWdlVXJsfSDwn5K7YCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBmZXRjaChyZXF1ZXN0KS50aGVuKGZ1bmN0aW9uIChuZXR3b3JrUmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKG5ldHdvcmtSZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgY2FjaGUucHV0KHN0b3JhZ2VVcmwsIG5ldHdvcmtSZXNwb25zZS5jbG9uZSgpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgJHtzdG9yYWdlVXJsfSDwn4yOYCk7XG4gICAgICAgIHJldHVybiBuZXR3b3JrUmVzcG9uc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIENoZWNrIG5ld2VzdCBjYWNoZSBhbmQgZGVsZXRlIG9sZCB2ZXJzaW9uXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJhY3RpdmF0ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc29sZS5sb2coXCJOZXcgU2VydmljZSBXb3JrZXIgYWN0aXZhdGluZ1wiKTtcbiAgY29uc3QgY2FjaGVXaGl0ZWxpc3QgPSBbc3RhdGljQ2FjaGVdO1xuXG4gIGV2ZW50LndhaXRVbnRpbChcbiAgICBjYWNoZXMua2V5cygpLnRoZW4oZnVuY3Rpb24gKGNhY2hlTmFtZXMpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgICAgY2FjaGVOYW1lc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjYWNoZU5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgY2FjaGVOYW1lLnN0YXJ0c1dpdGgoXCJyZXN0LXJldmlld3MtXCIpICYmIGNhY2hlTmFtZSAhPSBzdGF0aWNDYWNoZVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgaWYgKGNhY2hlV2hpdGVsaXN0LmluZGV4T2YoY2FjaGUpID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlcy5kZWxldGUoY2FjaGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcbn0pOyJdfQ==
