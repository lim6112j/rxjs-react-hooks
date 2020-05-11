import React, { useState } from 'react';
import handlers from './handlers';

const useHandlers = (keyval) => {
  return handlers[keyval];
}

export default useHandlers;
