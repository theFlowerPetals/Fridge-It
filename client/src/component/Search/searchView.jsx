import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Message } from 'semantic-ui-react';

import * as searchActions from '../../actions/searchActions.js';
import SearchListEntry from './searchListEntry.jsx';

class SearchView extends Component {
  constructor(props){
    super(props);
  };

  render() {
    let { actions, ingredients, recipeList } = this.props;

    if (annyang) {
      // Let's define a command.
      var commands = {
        'show recipes with *ingredients': getRecipes
      };
    
      // Add our commands to annyang
      annyang.addCommands(commands);
  
      // Start listening.
      annyang.start();
    }

    if(recipeList.length > 0) {
      return (
        <div>
          <Card.Group itemsPerRow={3}>
            {recipeList.map(recipe => (
              <SearchListEntry key={recipe.id} recipe={recipe} />
            ))}
          </Card.Group>
        </div>
      )
    }

    return (
      <div style={{textAlign: 'center'}}>
        <Message>
          <Message.Header content={'No Recipes to Show'} />
          <p>Try Adding in Some Ingredients in Your Fridge on the Home Page!</p>
        </Message>
      </div>
    )
  }
};

const searchState = (store) => {
  return {
    ingredients: store.items.items,
    recipeList: store.search.recipes
  }
};

const searchDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(searchActions, dispatch),
  }
};

export default connect(searchState, searchDispatch)(SearchView);