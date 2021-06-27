'use strict';

class Message {
  constructor (content, authorId, timestamp) {
    this.content = content;
    this.authorId = authorId;
    this.timestamp = timestamp;
  }
}

class Bug {
  constructor (top, left) {
    this.bug = $('<div class="bug" id="original"></div>');
    this.bugR = $('<div class="bug" id="rotated"></div>');
    this.bugR2 = $('<div class="bug" id="rotated2"></div>');
    this.setPosition(top, left);
  }
  setPosition (top, left) {
    this.bug.css({top, left});
    this.bugR.css({top, left});
    this.bugR2.css({top, left});
  }
}

function prettifyDate (timestamp) {
  const options = {hour: '2-digit', minute: '2-digit'};
  return new Date(timestamp).toLocaleTimeString('en-US', options);
}

$(() => {
  function showMessage (msg) {
    const { content, authorId, timestamp } = msg;
    const $HtmlMsg = $(`
    <div class="message ${authorId === 'Human:'? 'right' : 'left'}">
      <div class="message-id">${authorId}</div>
      <div class="message-text">${content}</div>
      <div class="message-time">${prettifyDate (timestamp)}</div>
    </div>
    `);

    const $messages = $('.messages-container');
    $messages.append($HtmlMsg);
    $messages.animate({
      scrollTop: $messages[0].scrollHeight
    });
  }

  const $container = $('.container');

  function appendBugs (bug) {
    $container.append(bug.bug);
    console.log('bug.bug: ', bug.bug);
  }

  function appendBugss (bug) {
    $container.append(bug.bugR);
    console.log('bugR.bug: ', bug.bugR);
  }

  function appendBugsss (bug) {
    $container.append(bug.bugR2);
    console.log('bugR2.bug: ', bug.bugR2);
  }

  function randomPosition () {
    const $container = $('.container');
    return [
      Math.round($container.height() * Math.random()),
      Math.round($container.width() * 3 * Math.random())
    ];
  }

  $('#msg-form').on('submit',(e) => {
    e.preventDefault();
    const content = $('#text').val();
    if (content) {
      $('#text').val(' ');
      const msg = new Message(content, 'Human:', Date.now());
      showMessage(msg);
      appendBugs (new Bug(...randomPosition()));
      appendBugss (new Bug(...randomPosition()));
      appendBugsss (new Bug(...randomPosition()));
    }
    setTimeout(() => {
      $.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist,explicit&type=single', data => {
        const msg = new Message(data.joke, 'Bugbot:', Date.now());
        showMessage(msg);
      });
    }, 1000);
  });

  $('#squash').click(function () {
    $('.bug').hide();
  });
});

$();