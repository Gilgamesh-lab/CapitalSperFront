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
	
deployFirebase:
	git push
	git checkout master
	git merge develop
	ng build --configuration=production
	git add .
	git diff-index --quiet HEAD || git commit -am "Deploiement d'une nouvelle version sur FireBase" 
	firebase login
	firebase deploy
	git checkout develop

off:
	firebase hosting:disable --project capitalsper

startBdd:
	firebase emulators:start
	
run:
	ng serve
	

	
	