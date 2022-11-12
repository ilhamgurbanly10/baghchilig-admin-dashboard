import {Helmet} from "react-helmet";
import {useState , useEffect} from 'react'
import {useTranslation} from "react-i18next";
import { Button, Checkbox, Form, Input, Spin, notification } from 'antd';
import { useDispatch , useSelector } from "react-redux";
import {loginUser} from '../redux/reducers/userSlice';
import { CheckCircleFilled, WarningOutlined} from '@ant-design/icons';


const Login = () => {

    const {t, i18n} = useTranslation('common');
    let lan = i18n.language;

    const data = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    
    const onFinish = (values) => {

      setLoading(true);

      dispatch(loginUser(values))
      .unwrap()
      .then((originalPromiseResult) => {
        originalPromiseResult.data.length ? successfullyLogin(): couldNotLogin(); 
        setLoading(false);
      })
      .catch((rejectedValueOrSerializedError) => {
        errorNotification();
        setLoading(false);
      })

    };

    const validateMessages = {
      required: t('texts.required'),
      types: {
        email: t('texts.invalidEmail')
      }
    };

    const empty = () => {
      form.resetFields();
    };

    const successfullyLogin = () => {
      notification.open({
        message: t(`texts.successfullyLogin`),
        icon: <CheckCircleFilled style={{ color: '#2fee10' }} />,
      });
    }

    const couldNotLogin = () => {
      notification.open({
        message: t(`texts.couldNotLogin`),
        icon: <WarningOutlined style={{ color: '#fc0f30' }} />,
      });
    }

    const errorNotification = () => {
      notification.open({
        message: t('texts.errorOccured'),
        icon: <WarningOutlined style={{ color: '#fc0f30' }} />,
      });
    }

    useEffect(()=>{
      
    }, [])

    return (
      <>

        <Helmet>
          <title>{t('titles.pageName')} - {t('titles.login')}</title>
        </Helmet>

        <div className="d-flex w-100 vh-100 align-items-center align-content-center justify-content-center">

          <Form
            form={form}
            className="w-25"
            name="basic"
            validateMessages={validateMessages}
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <h5 className="text-center mt-0">{t('titles.login')}</h5>

            <Form.Item
              label={t('titles.email')}
              name="email"
              className="mt-4"
              rules={[
                {
                  required: true,
                  type: 'email',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={t('titles.password')}
              name="password"
              className="mt-4"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                span: 24,
              }}
            >
              <Checkbox>{t('titles.remember')}</Checkbox>
            </Form.Item>

            <Spin classname="mt-5" spinning={loading}/>

            <Form.Item
              wrapperCol={{
                span: 24,
              }}
            >

              <button className={`btn btn-primary w-100 mt-3 py-2`} htmlType="submit">
                  { t('buttons.login') }
              </button>

              <button className={`btn btn-danger w-100 mt-4 py-2 mt-4`} htmlType="button" onClick={() => { empty() }}>
                  {t('buttons.reset')}
              </button>

            </Form.Item>
          </Form>

        </div>  

      </>  
    );

}
  
export default Login;