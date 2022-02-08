import styles from './Credits.module.css';

const Credits = () => {
  return (
    <div className={styles['credits-page']}>
      <div className="container-fluid">
        <h3>Credits</h3>
        <div>
          <p>
            Template by{' '}
            {/** <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            <a href="https://colorlib.com" target="_blank" rel="noreferrer">
              Colorlib
            </a>
          </p>
          <p>
            Created with{' '}
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              React
            </a>
          </p>
          <p>
            Hosted on{' '}
            <a
              href="https://azure.microsoft.com/en-us/"
              target="_blank"
              rel="noreferrer">
              Azure
            </a>
          </p>
          <p>
            Created using{' '}
            <a
              href="https://firebase.google.com/?gclid=CjwKCAiAo4OQBhBBEiwA5KWu_0QLUAv9lrbEp2Io4kbJ2_1wwxOmL_qgTr4LAIF23VBdYb9lwtQVchoCnzYQAvD_BwE&gclsrc=aw.ds"
              target="_blank"
              rel="noreferrer">
              Firebase
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Credits;
