# Tâches

deploy:
	git push
	git checkout master
	git merge develop
	ng build --output-path docs --base-href "/CapitalSperFront/"
	deploiement.bat
	git add .
	git commit -am "Deploiement d'une nouvelle version"
	git push 
	git checkout develop
	
	