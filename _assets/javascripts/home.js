$(document).ready(function(){
  introModal();
  bodyListener();
  formListener();
})


function introModal(){
  $('#about-modal').modal('show');
}

function createModal(item){
  var contentModal = $('#content-modal');
  if(content[item]){
    contentModal.find('.modal-title').html(content[item].title);
    contentModal.find('.body-content').html(content[item].content);
    var imageUrl = $('#' + item).find('img').attr('src');
    contentModal.find('.thumb-image').attr('src', imageUrl);
  }

  contentModal.modal('show');
}

function introListener(){
  $('.intro').click(function(event){
    event.preventDefault();
    createModal('intro');
  });
}

function cloudListener(){
  $('#clouds').click(function(event){
    event.preventDefault();
    createModal('clouds');
  });
}

function bodyListener(){
  $('.flex-container').click(function(event){
    var target = event.target.closest('.flex-item');
    if(target){
      createModal(target.id);
    }
  })
}

function formListener(){
  var form = $('')
}