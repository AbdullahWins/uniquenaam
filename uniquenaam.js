"use strict";

const UniqueNaam = (originalFilename) => {
  const timestamp = Date.now();
  const uniqueFilename = `${timestamp}_${originalFilename}`;
  return uniqueFilename;
};

module.exports = {
  UniqueNaam,
};
