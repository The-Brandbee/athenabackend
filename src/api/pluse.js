"use strict";

var path = require("path");
var fs = require("fs");

var pluseModel = require("../model/pluse");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var pluse = {
    add: function (params, cb) {
        var createData = {
          title:params.title,
          url: params.url,
          pluse:[]
        };
        let title1 = params.image_alt;
  
        if (typeof title1 == "string") {
          var solution = {
            image_alt:  params.image_alt,
          }
          var fileName =  'pluse_' + indx + '_' + params.files.image.md5 + path.extname(params.files.image.name);
          var filePath = 'public/uploads/pluse/' + fileName;

          fs.writeFile(filePath, params.files.image.data, function(err, written) {

              if (err) {
                  console.log('Error in uploading event image.' + err);
              }
          });
          solution.image = filePath;
          createData.pluse.push(solution);
        }
         else {
          for(var indx in params.image_alt){
            if (params.image_alt[indx] != '' ) {
              var solution = {
                image_alt:  params.image_alt[indx],
                //image: null
              }


            
              if (params.files.image[indx] && params.files.image[indx].data) {
                var fileName = 'pluse_' + indx + '_' + params.files.image[indx].md5 + path.extname(params.files.image[indx].name);
                  var filePath = 'public/uploads/pluse/' + fileName;
  
                  fs.writeFile(filePath, params.files.image[indx].data, function(err, written) {
  
                      if (err) {
                          console.log('Error in uploading solution image.' + err);
                      }
                  });
                  solution.image = filePath;
              } 
              createData.pluse.push(solution);
           
          }
        }
        }
          pluseModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        pluseModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        pluseModel.fetchById(id, function(err, result) {
           if (err) {
                return cb(err);
            }
            return cb(err, result);
        });
    },

    update: function (params, cb) {
      
      var data = {
        "updateData": {
          title:params.title,
          url: params.url
        },
        "arrayData": []
      };

      console.log({params:params.files})

      let title1 = params.image_alt;

      if (typeof title1 == "string") {
        var solution = {
          image_alt:  params.image_alt
        }
        if (params.files.image && params.files.image.data) {
          var fileName =  'pluse_' + indx + '_' + params.files.image.md5 + path.extname(params.files.image.name);
          var filePath = 'public/uploads/pluse/' + fileName;

          fs.writeFile(filePath, params.files.image.data, function(err, written) {

              if (err) {
                  console.log('Error in uploading event image.' + err);
              }
          });
          solution.image = filePath;
          data.arrayData.push(solution);
        }
        
        
      }
       else {
        for(var indx in params.image_alt){
          if (params.image_alt[indx] != '' ) {
            var solution = {
              image_alt:  params.image_alt[indx],
              //image: null
            }


          
            if (params.files.image[indx] && params.files.image[indx].data) {
              var fileName = 'pluse_' + indx + '_' + params.files.image[indx].md5 + path.extname(params.files.image[indx].name);
                var filePath = 'public/uploads/pluse/' + fileName;

                fs.writeFile(filePath, params.files.image[indx].data, function(err, written) {

                    if (err) {
                        console.log('Error in uploading solution image.' + err);
                    }
                });
                solution.image = filePath;
                data.arrayData.push(solution);
            } 
         
        }
      }
      }
      console.log({data})

      pluseModel.update(params._id, data, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        pluseModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    // update: function (params, cb) {
    //   console.log(params)
    //   var data = {
    //     "updateData": {
    //       title:params.title,
    //       url: params.url,
    //     },
    //     "arrayData": []
    //   };

    //   let title1 = params.image_alt;

    //     var solution = {
    //       image_alt:  params.image_alt
    //     }
    //     if (params.files.image && params.files.image.data) {
    //       var fileName =  'pluse_' + indx + '_' + params.files.image.md5 + path.extname(params.files.image.name);
    //       var filePath = 'public/uploads/pluse/' + fileName;

    //       fs.writeFile(filePath, params.files.image.data, function(err, written) {

    //           if (err) {
    //               console.log('Error in uploading event image.' + err);
    //           }
    //       });
    //       solution.image = filePath;
    //       data.arrayData.push(solution);
    //   }
    //    else {
    //     for(var indx in params.image_alt){
    //       if (params.image_alt[indx] != '' ) {
    //         var solution = {
    //           image_alt:  params.image_alt[indx],
    //           //image: null
    //         }


          
    //         if (params.files.image[indx] && params.files.image[indx].data) {
    //           var fileName = 'pluse_' + indx + '_' + params.files.image[indx].md5 + path.extname(params.files.image[indx].name);
    //             var filePath = 'public/uploads/pluse/' + fileName;

    //             fs.writeFile(filePath, params.files.image[indx].data, function(err, written) {

    //                 if (err) {
    //                     console.log('Error in uploading solution image.' + err);
    //                 }
    //             });
    //             solution.image = filePath;
    //             data.arrayData.push(solution);
    //         } 
         
    //     }
    //   }
    //   }
    //   pluseModel.update(params._id, data, function (err, result) {
    //     if (err) {
    //       return cb(err);
    //     }
  
    //     pluseModel.fetchById(params._id, function (err, updatedData) {
    //       if (err) {
    //         return cb(err);
    //       }
    //       return cb(err, updatedData);
    //     });
    //   });
    // },

    deleteId:function(params, cb) {
      pluseModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },

    deleteDataId: function(params, cb) {
      pluseModel.deleteDataId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = pluse;