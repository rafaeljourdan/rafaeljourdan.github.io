//Configurações
 
//Permitir recurso externo
app.config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', '**']);
});