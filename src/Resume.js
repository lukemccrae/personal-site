import React, {Component} from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import myResume from './resume.pdf';
import Modal from 'react-responsive-modal';

const customStyles = {
    content: {
    border: '3px',
    borderRadius: '4px',
    top: 'auto',
    bottom: 'auto',
    minHeight: '10rem',
    padding: '10rem',
    position: 'fixed',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    left: '50%',
    right: 'auto',
    minWidth: '10rem',
    width: '90%',
    maxWidth: '60rem'
  }
};

class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numPages: null,
      pageNumber: 1,
      open: false,
      docStyle: {
        width: '10%',
      }
    }

    // this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  // onDocumentLoadSuccess = ({ numPages }) => {
  //   this.setState({ numPages });
  // }
  //
  // openModal() {
  //   this.setState({modalIsOpen: true});
  // }
  //
  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }
  //
  // closeModal() {
  //   this.setState({modalIsOpen: false});
  // }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div style={ { display: this.props.showResume } } className="resume">
        <h5>I've been involved in multiple projects and am currently building solutions to civic problems with Code for San Francisco. You can view my resume
          <a href="#" onClick={this.onOpenModal}> here</a>
          .
        </h5>
        <div className="">
          <Modal
            open={this.state.open}
            onClose={this.onCloseModal}
          >

            <h2 ref={subtitle => this.subtitle = subtitle}></h2>
            <Document
              file={myResume}
              onLoadSuccess={this.onDocumentLoadSuccess}
              className="pdf-holder"
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
