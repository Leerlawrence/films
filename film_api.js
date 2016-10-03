var FilmApi = function(app){
  
  // app.use(bodyParser.urlencoded({extended: true}));


  app.get('/models/films', function(req,res){
  res.json({data:films})
  //res.json({cats})     -  just retuns cats
  });

  app.post('/models/films', function(req,res){
  films.push(req.body.film);
  res.json({data:films})
  //res.json({cats})     -  just retuns cats
  });

  app.get('/models/films/:id', function(req,res){
   var foundFilm = req.params.id;
  res.json({data:films[foundFilm]});    // use eg  http://localhost:3000/models/films/1  to get the index 1 back
  });


  app.delete('/models/films/:id', function(req,res){
    films.splice(req.params.id, 1);

    res.json({data:films}); 

  });

  app.put('/models/films/:id', function(req,res){
    
    films[req.params.id] =req.body.film;   //in test use body - in live use document field
    res.json({data:films}); 

  });


}

module.exports = FilmApi;