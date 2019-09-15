export const parseTextToHtml = body => {
  return { __html: body };
};

export const truncateText = (text, textCount = 100) => {
  return text.substr(0, textCount) + '...';
};
