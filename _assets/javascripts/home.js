'use-strict';

var gw = new Groundwork({
  'api_url': 'https://api.thegroundwork.com',
  'oauth_client_id': 'pub-un.forcedtoflee-int-dGXTeBirHmvyimD4mk5NOXyG5lpUfn7FF3TZCmFFgRV2yPx4Ttu_Pw6JIp89t83lKIh3pA0KpuqBbA3ZmNnopQ'
});

function sendData(data){
  data.tags.send_email = 0;
  gw.supporters.create(data)
  .then(function(res){
    console.log(res);
  })
  .catch(function(res){
    console.log(res);
  });
};

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
  resetModal(contentModal);
  if(content[item]){
    contentModal.find('.modal-title').html(content[item].title);
    contentModal.find('.body-content').html(content[item].content);
    var imageUrl = $('#' + item).find('img').attr('src');
    contentModal.find('.thumb-image').attr('src', imageUrl);
  }

  contentModal.modal('show');
}

function resetModal(modal){
  var form = modal.find('.modal-form');
  modal.find('.social-icons').hide();
  form.find("input").val("");
  form.show();
}

function introListener(){
  $('.intro').click(function(event){
    event.preventDefault();
    createModal('intro');
  });
}

function bodyListener(){
  $('.flex-container').click(function(event){
    var target = $(event.target).closest('.flex-item');
    if(target){
      createModal(target.attr('id'));
    }
  })
}

function formListener(){
  var form = $('.signup');
  form.submit(function(event){
    event.preventDefault();
    var data = {};
    data = separateNames(form,data);
    data.tags = {};
    data.email = form.find('[name="email"]').val();
    data.tags.email1 = form.find('[name="email1"]').val();
    data.source = "New Yorker " + $('.modal-title').html();
    sendData(data);
    $('.modal-form').hide();
    $('.social-icons').show();
  });
}

function separateNames(form, data){
  var names = form.find('[name="name"]').val().split(" ");
  data.givenName = names[0];
  names[1] ? data.familyName = names[1] : null;
  return data; 
}

