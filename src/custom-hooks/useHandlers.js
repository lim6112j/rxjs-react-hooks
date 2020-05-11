import React, { useState } from 'react';
import handlers from './handlers/handlers';

const useHandlers = (keyval) => {
  return handlers[keyval];
}

export default useHandlers;
