// Write your package code here!
if (Meteor.isClient) {
  Template.registerHelper('generateTextField', function(block){
    var html = '<div class="form-group" data-toggle="tooltip" title="'+ block.hash.title + '"><label for="' + block.hash.name + '" class="control-label">' + block.hash.label + '</label><input type="text" ';
    
    if(block.hash.class){
      html += ' class="form-control ' + block.hash.class + '" ';
    } else {
      html += ' class="form-control" ';
    }
    
    html += ' id="' + block.hash.id + '" name="' + block.hash.name + '" placeholder="' + block.hash.placeholder + '" ' + block.hash.required;
    
  
    if(block.hash.value !== '' && block.hash.value !== null && block.hash.value !== undefined){
      html += ' value="' + block.hash.value + '"';
    }
   
    html += '>'
    
    if(block.hash.help){
      html += '<p class="help-block">' + block.hash.help + '</p>';
    }
    
    html +='</div>';
    
    return new Spacebars.SafeString(html);
    
  });
  
  Template.registerHelper('generateInputField', function(block){
    var html = '<div class="form-group" data-toggle="tooltip" title="'+ block.hash.title + '"><label for="' + block.hash.name + '" class="control-label">' + block.hash.label + '</label><input type="'+ block.hash.type + '" ';
    
    if(block.hash.class){
      html += ' class="form-control ' + block.hash.class + '" ';
    } else {
      html += ' class="form-control" ';
    }
    
    html += ' id="' + block.hash.id + '" name="' + block.hash.name + '" placeholder="' + block.hash.placeholder + '" ' + block.hash.required;
    
    if(block.hash.min !== '' && block.hash.min !== null && block.hash.min !== undefined){
      html += ' min="' + block.hash.min +'"';
    }
    
    if(block.hash.max !== '' && block.hash.max !== null && block.hash.max !== undefined){
      html += ' max="' + block.hash.max +'"';
    }
    
    if(block.hash.value !== '' && block.hash.value !== null && block.hash.value !== undefined){
      html += ' value="' + block.hash.value + '"';
    }
   
    html += '>'
    
    if(block.hash.help){
      html += '<p class="help-block">' + block.hash.help + '</p>';
    }
    
    html +='</div>';
    
    return new Spacebars.SafeString(html);
    
  });
}