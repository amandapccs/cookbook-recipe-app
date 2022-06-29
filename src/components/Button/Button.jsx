import PropTypes from 'prop-types';
import React from 'react';
import { Button, Div } from './styles';

export default function GlobalButton({ datatestid, onClick, name }) {
  return (
    <Div>
      <Button
        type="button"
        data-testid={ datatestid }
        onClick={ onClick }
      >
        { name }
      </Button>
    </Div>

  );
}

GlobalButton.propTypes = {
  datatestid: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string,
}.isRequired;
