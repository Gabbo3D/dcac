#Install
mkdir dcac  &&  dcac
mkdir && cd dcac-api
touch config.php db.php product.php index.php
cd ..
mkdir dcac-app && cd dcac-app 
touch index.html script.js styles.css
cd ..

#RUN
	#dcac-api
	php -S localhost:8000
	#dcac-app
	xdg-open dcac-app/index.html



#Server API
gnome-terminal --tab --title="dcac-api" --command="bash -c 'cd dcac-api; php -S localhost:8000; exec bash'"
sleep 1
# Client API
gnome-terminal --tab --title="dcac-app" --command="bash -c 'cd dcac-app; xdg-open index.html; exec bash'"
