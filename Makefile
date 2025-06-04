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
	firebase login
	firebase deploy
	git push
	git checkout develop

off:
	firebase hosting:disable --project capitalsper

startBdd:
	firebase emulators:start
	
run:
	ng serve
	
deploy:
	ssh -R mon-projet:80:localhost:4200 serveo.net

	
	