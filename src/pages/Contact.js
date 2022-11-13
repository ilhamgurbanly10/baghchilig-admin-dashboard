import {Helmet} from "react-helmet";
import {useState , useEffect} from 'react'
import {useTranslation} from "react-i18next";
import { useDispatch , useSelector } from "react-redux";
import {getAllContacts, addContact, editContact, removeContact, switchStatusContact} from '../redux/reducers/contactSlice';
import { Button, Space, Table, Switch, Popconfirm, notification, Form, Input, Modal   } from 'antd';
import { CheckCircleFilled , WarningOutlined} from '@ant-design/icons';


const Contact = () => {

    const data = useSelector((state) => state.contact);
    const user = useSelector((state) => state.user);
    const isAdmin = user.data[0].isAdmin;
    const [form] = Form.useForm();
    const {t, i18n} = useTranslation('common');
    let lan = i18n.language;
    const dispatch = useDispatch();
    const locales = ['az','en','de'];
    const [id, setId] = useState(null);
    const [status, setStatus] = useState(true);
    const [loading, setLoading] = useState(true);

    // modal
    const [modalContent, setModalContent] = useState([]);
    const [open, setOpen] = useState(false);
    const titles = ['Linkedin','Instagram','Twitter','Facebook']
    
    const inputs = ['phone','email','address','linkedin','instagram','twitter','facebook']

    const columns = [
      {
        title: t('titles.phone'),
        dataIndex: `phone`,
        key: `phone`,
      },
      {
        title: t('titles.email'),
        dataIndex: `email`,
        key: `email`,
      },
      {
        title: t('titles.address'),
        dataIndex: `address`,
        key: `address`,
      },
      {
        title: t('titles.action'),
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            
            <button type="button" className="btn btn-primary me-3 ms-3" onClick={() => { showModal([record.linkedin,record.instagram,record.twitter,record.facebook]) }}>
                {t('titles.rest')} <i className="fa fa-eye ms-1"></i>
            </button>
            
            { isAdmin && 
            <Switch checked={record.status} onChange={(e) => { changeStatus(e, record.id) }} />
            }

            { isAdmin && 
            <a href="#form" onClick={() => { startEditing(record.id); }} className="btn btn-success ms-3 me-3">
                {t('buttons.edit')}
            </a>
            }

            { isAdmin &&  
            <Popconfirm
              title={t('texts.confirmationMessage')}
              onConfirm={() => { removeData(record.id) }}
              okText={t('texts.yes')}
              cancelText={t('texts.no')}
            >
              <button type="button" className="btn btn-danger">
                  {t('buttons.delete')}
              </button>
            </Popconfirm>
            }
          
          </Space>
        ),
      },
    ];
    
    const onFinish = (values) => {
      id ? editData(values) : addData(values);
      empty();  
    };

    const addData = (values) => {

      let obj = {};
      obj = {...values}
      obj.status = status;

      dispatch(addContact({...obj}))
      .unwrap()
      .then((originalPromiseResult) => {
        successNotification();
      })
      .catch((rejectedValueOrSerializedError) => {
        errorNotification();
      })

    }

    const startEditing = (id) => {
      setId(id)
      let editedData = data.data.find(d => d.id === id)
      form.setFieldsValue(editedData)
      setStatus(editedData.status);
    }

    const editData = (values) => { 

      let obj = {};
      obj = {...values}
      obj.status = status;
      dispatch(editContact({id, data: {...obj}}))
      .unwrap()
      .then((originalPromiseResult) => {
        successNotification("edit");
      })
      .catch((rejectedValueOrSerializedError) => {
        errorNotification();
      })

    }

    const changeStatus = (e, id) => {

      let editedData = data.data.find(d => d.id === id)
      dispatch(switchStatusContact({...editedData, status: e}))
      .unwrap()
      .then((originalPromiseResult) => {
        successNotification("edit");
      })
      .catch((rejectedValueOrSerializedError) => {
        errorNotification();
      })
      empty();

    }

    const removeData = (id) => {

      dispatch(removeContact(id))
      .unwrap()
      .then((originalPromiseResult) => {
        successNotification("remove");
      })
      .catch((rejectedValueOrSerializedError) => {
        errorNotification();
      })
      empty();

    }

    const empty = () => {
      form.resetFields();
      setStatus(true);
      setId(null);
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

    const footerText = () => {
      let text;
      const len = data.data.length;
      if (len === 0) text = t('texts.notPosts');
      else if (len === 1) text = `${len} ${t('texts.post')}`
      else text = `${len} ${t('texts.posts')}`  
      return text;
    }

    const showModal = (content) => {
      setModalContent(content);
      setOpen(true)
    }

    useEffect(()=>{
      dispatch(getAllContacts())
      .unwrap()
      .then((originalPromiseResult) => {
        setLoading(false);
      })
    }, [])

    return (
      <>

        <Helmet>
          <title>{t('titles.pageName')} - {t('menu.item07')}</title>
        </Helmet>

        <Table id="table" title={() => ( <h6>{t('menu.item07')}</h6> )} footer={() => footerText() } columns={columns} dataSource={data.data} loading={loading}/>

        {  isAdmin && 
        <Form
            form={form}
            name="basic"
            className="mt-5 pt-5 w-65"
            id="form"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          > 

          { inputs.map((input, i) => ( 

            <Form.Item
              className="mt-5"
              key={i}
              label={`${t(`titles.${input}`)}`}
              name={`${input}`}
              rules={[
                {
                  required: true,
                  message: t('texts.required'),
                },
              ]}
            >
              <Input />
            </Form.Item>

          ))}

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
              { id ? t('buttons.edit') : t('buttons.add')}
            </Button>

            <Button className={`w-100 mt-4 mt-4`} type="primary" danger htmlType="button" onClick={() => { empty() }}>
                {t('buttons.reset')}
            </Button>

          </Form.Item>

        </Form>

        }

        <Modal
            className="ant-modal-no-footer ant-modal-img"
            title={t('titles.rest')}
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
          > 
            { modalContent?.map((c, i) => (
              <>
                <p key={i} className={`${i > 0 && 'mt-4'}`}>
                  <strong className="me-1">{titles[i]}: </strong> {c}
                </p>
              </>
            ))}

        </Modal>

      </>  
    );

}
  
export default Contact;