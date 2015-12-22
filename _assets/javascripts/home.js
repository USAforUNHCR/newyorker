var content = {
  intro: {
    title: "This is the intro title",
    content: 'Here is some intro content',
  },
  clouds: { title: "This is the clouds title",
            content: "This is the clouds content"
          }
}

$(document).ready(function(){
  scrollBottom();
  cloudListener();
  bodyListener();
})


function scrollBottom(){
  $('body').animate({ 
     scrollTop: $(document).height()},
     1400,
    'linear', function(){
    createModal('intro');
    }
  );
}

function createModal(item){
  var contentModal = $('#content-modal');
  if(content[item]){
    contentModal.find('.modal-title').html(content[item].title);
    contentModal.find('.body-content').html(content[item].content);
  }
  // placeholder until all content is added
  else {
    contentModal.find('.modal-title').html('This is the ' + item + ' title' );
    contentModal.find('.body-content').html('This is the ' + item + ' content');
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
  $('.flex-body').click(function(event){
    var target = event.target.closest('.flex-item');
    if(target){
      createModal(target.id);
    }
  })
}