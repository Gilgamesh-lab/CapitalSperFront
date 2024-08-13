%@Try%
  xcopy "docs/browser" "docs/" /e /i
  xcopy "docs/index.html" "docs/404.html" /e /i
  ::echo|set /p="<h1>Erreur 404, la page n'a pas pu être trouvé</h1>">>docs/404.html
%@EndTry%
:@Catch
  echo Erreur lors de l'exécution du .bat
:@EndCatch
