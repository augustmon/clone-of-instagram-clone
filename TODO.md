# TO DO

1. tjek om properties kan bruges paa posts √
   - omform HTML til JSX (converter): class->className etc.
   - render som JSX i en anden component (App.js)
2. stories component √

3. knap der kan tilfoeje ny story

   - array in localStorage => imageUrl.forEach((imageUrl) => <ReactStory storyImage={imageUrl}/>)

4. (script til at vise story i stoerre format onclick) √

CODE TO START JSX PREPROCESSOR in the public directory:
npx babel --watch public/src --out-dir public --presets react-app/prod
