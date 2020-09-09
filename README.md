# Watch Tower

Watch Tower is a web application developed for TAMUHack 2020. It was made in response to USAA's challenge to make something that could help in the response to the Austrailian bush fires that occurred in the Spring of 2020.

Mainly, the app served as an interactive dashboard to alert users of nearby fires, their current risk of new fires appearing in their area, and various other atmospheric and environmental data that could be impacted by fires. Unfortunately, the app had to be shut down shortly after completion of TAMUHack 2020 due to lost access to certain APIs.

# Solution

The front-end of Watch Tower was built using the Angular web framework, and the back-end was built with and hosted on Google Firebase.

The data for this project is dependent upon several different APIs, and being able to search for specific addresses required many real-time updates to the web app. Often times, due to our extensive use of asynchronous functions to accomplish the HTTP requests, this resulted in some of the data not being updated at the proper time.

The heatmap and UI are the things we are most proud of. Collecting enough data for and implementing the heatmap was a complex process that involved tying several different APIs, Google Firebase Functions/Realtime Database, and the Google Maps API together. We believe we ended up with effective, practical, and cool looking map as a result!
