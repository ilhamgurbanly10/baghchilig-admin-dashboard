import {Helmet} from "react-helmet";
import {useState , useEffect} from 'react'
import {useTranslation} from "react-i18next";
import { useDispatch , useSelector } from "react-redux";
import {removeUser, editUser, logOutUser} from '../redux/reducers/userSlice';
import { Space, Table, Switch, Popconfirm, notification, Form, Input, Avatar, Card, Button, Image } from 'antd';
import { SmileOutlined , CheckCircleFilled, WarningOutlined, EditOutlined, EllipsisOutlined, DeleteOutlined} from '@ant-design/icons';

const { Meta } = Card;

const User = () => {

    const data = useSelector((state) => state.user);
    const [form] = Form.useForm();
    const {t, i18n} = useTranslation('common');
    let lan = i18n.language;
    const dispatch = useDispatch();
    const [status, setStatus] = useState(true);
    const [adminStatus, setAdminStatus] = useState(true);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [showRest, setShowRest] = useState(false);
    
    const onFinish = (values) => {
      editData(values);
      empty();  
    };

    const editData = (values) => { 

      let obj = {};
      obj = {...values, token: data.data[0].token }
      obj.status = status;
      obj.isAdmin = adminStatus;
      dispatch(editUser({id: data.data[0].id, data: {...obj}}))
      .unwrap()
      .then((originalPromiseResult) => {
        successNotification("edit");
        if (!status) dispatch(logOutUser());
        empty();
      })
      .catch((rejectedValueOrSerializedError) => {
        errorNotification();
      })

    }

    const removeData = () => {

      dispatch(removeUser(data.data[0].id))
      .unwrap()
      .then((originalPromiseResult) => {
        successNotification("remove");
      })
      .catch((rejectedValueOrSerializedError) => {
        errorNotification();
      })

    }

    const empty = () => {
      form.resetFields();
      setStatus(data.data[0].status);
      setAdminStatus(data.data[0].isAdmin);
    };

    const successNotification = (type = "add") => {

      let messagge = "";
      if (type == "edit") messagge = "successfullyChanged";
      else if (type == "remove") messagge = "successfullyDeleted";
      else messagge = "successfullyAdded";

      notification.open({
        message: t(`texts.${messagge}`),
        icon: <CheckCircleFilled style={{ color: '#2fee10' }} />,
      });

    }

    const errorNotification = () => {
      notification.open({
        message: t('texts.errorOccured'),
        icon: <WarningOutlined style={{ color: '#fc0f30' }} />,
      });
    }

    const validateMessages = {
      required: t('texts.required'),
      types: {
        email: t('texts.invalidEmail')
      }
    };

    useEffect(()=>{
      setStatus(data.data[0].status);
      setAdminStatus(data.data[0].isAdmin);
    }, [])

    return (
      <>

        <Helmet>
          <title>{t('titles.pageName')} - {t('titles.user')}</title>
        </Helmet>

        <h6>{`${t('titles.user')} - ${data.data[0].first_name} ${data.data[0].last_name}`}</h6>

        <Card
          className="mt-5"
          style={{
            width: 300,
          }}
          cover={
            <Image
              alt="Wallpaper"
              src={data.data[0].wallpaper}
            />
          }
          actions={[

            <EditOutlined key="edit" onClick={() => {setShowForm(!showForm)}}/>,

            <Popconfirm
              title={t('texts.confirmationMessage')}
              onConfirm={() => { removeData() }}
              okText={t('texts.yes')}
              cancelText={t('texts.no')}
            >
              <DeleteOutlined key="delete" />
            </Popconfirm>,

            <EllipsisOutlined key="ellipsis" onClick={() => {setShowRest(!showRest)}}/>
            
          ]}
        >
          <Meta
            avatar={<div className="rounded-pill overflow-hidden"><Image style={{width: "auto", height: "35px"}} src={data.data[0].avatar} /></div>}
            title={`${data.data[0].first_name} ${data.data[0].last_name}`}
            description={`${t('titles.email')}: ${data.data[0].email}`}
          />
        </Card>

        <div className={`mt-5 ${!showRest && 'd-none'}`}>
            
            <p className="my-3">
                <strong className="me-1">{t('titles.password')}: </strong>{data.data[0].password}
            </p>
            
            <p className="my-3">
                <strong className="me-1">{t('titles.position')}: </strong>{data.data[0].isAdmin ? 'Admin' : t('titles.user')}
            </p>

            <p className="my-3">
                <strong className="me-1">Status: </strong>{data.data[0].status ? t('titles.active') : t('titles.deactive')}
            </p>

        </div>

        <Form
            form={form}
            name="basic"
            className={`mt-5 pt-5 w-65 ${!showForm && 'd-none'}`}
            id="form"
            validateMessages={validateMessages}
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              ...data.data[0]
            }}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
        > 

          <Form.Item
            className="mt-5"
            label={`${t('titles.image')}`}
            name={`avatar`}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="mt-5"
            label={`${t('titles.wallpaper')}`}
            name={`wallpaper`}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="mt-5"
            label={`${t('titles.email')}`}
            name={`email`}
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
            className="mt-5"
            label={`${t('titles.firstName')}`}
            name={`first_name`}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="mt-5"
            label={`${t('titles.lastName')}`}
            name={`last_name`}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
              label={t('titles.password')}
              name="password"
              className="mt-5"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password />
          </Form.Item>
          
          { data.data[0].isAdmin && <Form.Item label={t('titles.isAdmin')} className="mt-5" valuePropName="isAdmin">
            <Switch checked={adminStatus} onChange={(e) => { setAdminStatus(e) }} />
          </Form.Item> }

          <Form.Item label="Status" className="mt-5" valuePropName="status">
            <Switch checked={status} onChange={(e) => { setStatus(e) }} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <Button className={`w-100 mt-4`} type="primary" htmlType="submit">
                {t('buttons.edit')}
            </Button>

            <Button className={`w-100 mt-4 mt-4`} type="primary" danger htmlType="button" onClick={() => { empty() }}>
                {t('buttons.reset')}
            </Button>

          </Form.Item>

        </Form>

      </>  
    );

}
  
export default User;