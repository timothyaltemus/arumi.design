export const resizeProjectDetails = () => {
  const projectDetailsSection = document.querySelector<HTMLElement>(
    '#product-details-section'
  );
  const projectImage = document.querySelector<HTMLElement>(
    '#project-details-image'
  );
  const image = projectImage?.querySelector<HTMLImageElement>('img');
  if (!projectDetailsSection || !projectImage || !image) {
    return;
  }
  const detailsHeight = projectDetailsSection.clientHeight;
  image.style.maxHeight = detailsHeight + 'px';
};
