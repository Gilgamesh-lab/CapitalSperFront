# Tâches

deployGit:
	git push
	git checkout master
	git merge develop
	ng build --output-path docs --base-href CapitalSperFront
	deploiement.bat
	git add .
	git commit -am "Deploiement d'une nouvelle version sur Github"
	git push 
	git checkout develop
	
deployFireBase:
	git push
	git checkout master
	git merge develop
	ng build
	firebase login
	firebase deploy
	git add .
	git commit -am "Deploiement d'une nouvelle version sur FireBase"
	git push 
	git checkout develop
	
	