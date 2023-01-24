import React from 'react';
import Layout from '@theme/Layout';
import styles from './demo.module.css';
import ReactiveButton from 'reactive-button';


function Form() {
  if (!success) {
          return setState({
            status: 'failed',
            message: 'Unable to submit your request.',
          });
        }

        return setState({ status: 'succeed', message });
      })
      .catch(() =>
        setState({
          status: 'failed',
          message: 'Unable to submit your request.',
        })
      );
  };

  if (state.status === 'succeed' && state.message) {
    return (
      <Card className="uil-m-auto uil-ta-center apply-form">
        <Heading1 className="apply-text">Thank you!</Heading1>
        <br />

        {state.message.startsWith('Your DocSearch') ? (
          <Text
            className="uil-pv-8 uil-d-block apply-text"
            aria-label="Request has already been processed"
          >
            {state.message}
          </Text>
        ) : (
          <>
            <Text
              className="uil-pv-8 uil-d-block apply-text"
              aria-label="Request will be processed"
            >
              {state.message} We'll get back to you at <strong>{email}</strong>{' '}
              with the snippet you'll need to integrate into{' '}
              <InlineLink href={url}>{url}</InlineLink>.
            </Text>

            <Text aria-label="recommendations" className="apply-text">
              Please be patient, in the meantime, you can implement{' '}
              <InlineLink href={withBaseUrl('docs/tips')}>
                our recommendations for building a great DocSearch experience.
              </InlineLink>
            </Text>
          </>
        )}
      </Card>
    );
  } 
  return (
    <Layout title="聯絡">
      <main>
        <div className={styles.content}>
          <h1>
         聯繫雙龍體育
          </h1>
       
        </div>
        <div className={styles.formwrapper}>
          <div className={styles.formbox}>
            <form
              action="https://send.pageclip.co/uLHUxztMTNIK2IljRIEgBJh6JVi7QruG/Site-contact"
              name="聯繫表單"
              method="POST" 
            >
              <input type="hidden" name="form-name" value="聯繫表單" />
              <p>
                <label>
                  名稱
                  <input
                    type="text"
                    name="name"
                    placeholder="你的名子"
                    required
                  />
                </label>
              </p>
              <p>
                <label>
                  電子郵件
                  <input
                    reqpuired
                    type="email"
                    name="email"
                    placeholder="name@ssangyongsports.org"
                  />
                </label>

                <label>
                  Comments
                  <textarea
                    name="留言"
                    placeholder="輸入..."
                    rows="3"
                  ></textarea>
                </label>
              </p>
              <p>
                      <a href="https://github.com/">
                    <ReactiveButton disabled={state.status === 'loading'} type={'submit'} idleText="Submit" />
                     </a>

              </p>
            </form>


          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Form;
