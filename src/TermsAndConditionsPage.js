import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';
import './Header.css';

function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <Menu />

      <div className="terms-and-conditions-page">
        <h1>Terms and Conditions</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo massa nec risus finibus, ac pharetra elit consequat. Nullam semper volutpat sapien, et congue lorem tristique vitae. Ut sed leo in elit scelerisque commodo nec euismod lorem. Nulla tincidunt nisi vitae nisl efficitur, et sollicitudin leo congue. Fusce a tellus neque. Praesent suscipit mi non ex interdum, a dictum sem dictum. Nam a lectus in nulla pharetra facilisis vel sed nunc. In rutrum pellentesque tortor, et dapibus ex pellentesque vitae. Proin maximus nisl sed lectus aliquam, sit amet fermentum dolor malesuada. In hac habitasse platea dictumst. Sed nec fermentum sem. Nulla facilisi. Fusce ultrices est a erat interdum, eu posuere tellus tincidunt. Nam bibendum felis eget turpis fermentum, a luctus lectus convallis. Donec luctus nisi ut purus porttitor consectetur.</p>
        <p>Vivamus vel vestibulum tellus. Nunc id turpis in ipsum consequat fermentum vitae et metus. Nullam sed massa non est condimentum gravida. Curabitur tempus erat ac diam tincidunt volutpat. Ut ultrices enim nec nisl lacinia sollicitudin. Suspendisse potenti. Nunc posuere, lectus a convallis aliquet, sapien elit sagittis mi, vitae faucibus arcu ipsum sit amet mi. Aenean eleifend auctor varius. Mauris luctus magna sed purus tincidunt malesuada. Curabitur vel tellus ac mauris tincidunt scelerisque.</p>
        <p>Integer vulputate consequat lectus ac pharetra. Curabitur eu enim id justo semper iaculis. Praesent dapibus mi at lorem rutrum hendrerit. Aliquam tristique volutpat fringilla. Aliquam erat volutpat. Nullam dapibus eros a nisi ullamcorper, et suscipit lorem placerat. Sed tincidunt erat nec tristique porttitor. Sed varius turpis et tempor viverra. Morbi iaculis felis ut eros eleifend, vel iaculis lacus placerat. Vivamus nec ligula id justo aliquam ultrices in eget dolor. Vestibulum a arcu feugiat, aliquet nunc sed, tempor elit. Nulla sed justo ut sem tristique hendrerit.</p>
      </div>

      <Footer />
    </>
  );
}

export default TermsAndConditionsPage;
