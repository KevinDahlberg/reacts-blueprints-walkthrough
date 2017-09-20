'use strict';

import Reflux from 'reflux';

const Actions = Reflux.createAction({
  children: ['completed', 'failed']
});

Actions.listen( function(){
    fetch('../products.json').then((response) => {
      return response;
    });
});

module.exports = Actions;
