/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/*
 * GET users listing.
 */

exports.list = function(req, res){
    res.send("respond with a resource");
};
