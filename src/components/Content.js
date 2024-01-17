const Content = ({ selectedSection }) => {
  return (
    <div>
      <h3>Content</h3>
      {selectedSection === 'section1' && <p>Content for Section 1</p>}
      {selectedSection === 'section2' && <p>Content for Section 2</p>}
      {selectedSection === 'section3' && <p>Content for Section 3</p>}
    </div>
  );
};

export default Content;