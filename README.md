# MEAN Stack Code Challenge

###John McSwain

<p>

GitHub repo link: (You're here already) https://github.com/johnmcswain/code-challenge
Live web client page: https://johnmcswain.github.io/code-challenge/
Live node client (i.e. https://jm-turner.herokuapp.com/db?TitleName=Cavalcade): https://jm-turner.herokuapp.com/db

Clicking the 'search' button with an empty field returns all of the records. The title search is case sensitive (i.e. Cavalcade, not cavalcade) and the results are displayed in cards.

Click the dots in the upper right corner to expand the title detail window. Click the x in the upper right to close.
<img src="https://dl.dropboxusercontent.com/u/609330/closed.png" width="40%"><img src="https://dl.dropboxusercontent.com/u/609330/open.png" width="40%"><br>
The node_backend folder contains the node.js application making requests to the turner readonly mongodb backend when HTTP requests are received.

The client_web folder contains the client code, which uses angular to make http client requests to the aforementioned node_backend application using a query string.
</p>
