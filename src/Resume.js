import React, {Component} from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import myResume from './resume.pdf';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const customStyles = {
    content: {
    border: '0',
    borderRadius: '4px',
    top: 'auto',
    bottom: 'auto',
    minHeight: '10rem',
    left: '50%',
    padding: '2rem',
    position: 'fixed',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    minWidth: '20rem',
    width: '80%',
    maxWidth: '60rem'
  }
};

class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numPages: null,
      pageNumber: 1,
      modalIsOpen: false,
      docStyle: {
        width: '10%',
      }
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div style={ { display: this.props.showResume } } className="resume">
        <button onClick={this.openModal}>View Resume</button>
        <div className="">
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            shouldCloseOnOverlayClick={true}
          >

            <h2 ref={subtitle => this.subtitle = subtitle}></h2>
            <Document
              file={myResume}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Resume;
