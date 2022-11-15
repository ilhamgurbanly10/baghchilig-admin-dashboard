import {Helmet} from "react-helmet";
import {useState , useEffect} from 'react'
import {useTranslation} from "react-i18next";
import { useDispatch , useSelector } from "react-redux";
import {getAllMovies, getWatchedMovies, addMovie, removeMovie, addToWatched} from '../redux/reducers/moviesSlice';
import { Button, Space, Table, Switch, Popconfirm, notification, Form, Input, Modal, Image   } from 'antd';
import { CheckCircleFilled , WarningOutlined} from '@ant-design/icons';


const Movies = () => {

    const data = useSelector((state) => state.movies);
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

    const changeStatus = (st, id) => {


      let editedData = data.data.find(d => d.id === id)
      dispatch(addToWatched({...editedData, watched: st}))
      .unwrap()
      .then((originalPromiseResult) => {
        successNotification("edit");
      })
      .catch((rejectedValueOrSerializedError) => {
        errorNotification();
      })
      empty();

    }

    const columns = [
      {
        title: t('titles.image'),
        dataIndex: 'img',
        key: 'img',
        render: (text) => <Image src={text} style={{width: "100px", height: "auto"}}/>,
      },
      {
        title: t('titles.name'),
        dataIndex: `name`,
        key: `name`,
      },
      {
        title: t('titles.action'),
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            
            <button type="button" className="btn btn-primary me-3 ms-3" onClick={() => { changeStatus(true, record.id) }}>
                {t('buttons.watched')} <i className="fa fa-eye ms-1"></i>
            </button>

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

    const columns2 = [
      {
        title: t('titles.image'),
        dataIndex: 'img',
        key: 'img',
        render: (text) => <Image src={text} style={{width: "100px", height: "auto"}}/>,
      },
      {
        title: t('titles.name'),
        dataIndex: `name`,
        key: `name`,
      },
      {
        title: t('titles.action'),
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            
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
      addData(values);
      empty();  
    };

    const addData = (values) => {

      let obj = {};
      obj = {...values}
      obj.watched = false;

      dispatch(addMovie({...obj}))
      .unwrap()
      .then((originalPromiseResult) => {
        successNotification();
      })
      .catch((rejectedValueOrSerializedError) => {
        errorNotification();
      })

    }

    const removeData = (id) => {

      dispatch(removeMovie(id))
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

    const footerText = (data) => {
      let text;
      const len = data.length;
      if (len === 0) text = t('texts.notPosts');
      else if (len === 1) text = `${len} ${t('texts.post')}`
      else text = `${len} ${t('texts.posts')}`  
      return text;
    }

    useEffect(()=>{
      dispatch(getAllMovies())
      .unwrap()
      .then((originalPromiseResult) => {
        dispatch(getWatchedMovies())
        setLoading(false);
      })
      
      
    }, [])

    return (
      <>

        <Helmet>
          <title>{t('titles.pageName')} - {t('titles.movies')}</title>
        </Helmet>

        <Table id="table" title={() => ( <h6>{t('titles.movies')}</h6> )} footer={() => footerText(data.data) } columns={columns} dataSource={data.data} loading={loading}/>

        <Table id="table" title={() => ( <h6>{t('titles.watchedMovies')}</h6> )} footer={() => footerText(data.watchedData) } columns={columns2} dataSource={data.watchedData} loading={loading}/>

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
            <Form.Item
              className="mt-5"
              label={`${t(`titles.image`)}`}
              name={`img`}
              rules={[
                {
                  required: true,
                  message: t('texts.required'),
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              className="mt-5"
              label={`${t(`titles.name`)}`}
              name={`name`}
              rules={[
                {
                  required: true,
                  message: t('texts.required'),
                },
              ]}
            >
              <Input />
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
  
export default Movies;