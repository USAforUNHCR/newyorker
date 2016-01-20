$(document).ready(function(){
  introModal();
  bodyListener();
})


function introModal(){
  createModal('intro');
}

function createModal(item){
  var contentModal = $('#content-modal');
  if(content[item]){
    contentModal.find('.modal-title').html(content[item].title);
    contentModal.find('.body-content').html(content[item].content);
  }
  contentModal.modal('show');
}

function introListener(){
  $('.intro').click(function(event){
    event.preventDefault();
    debugger;
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