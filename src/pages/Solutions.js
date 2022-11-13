import {Helmet} from "react-helmet";
import React, {useState , useEffect, useRef, useMemo} from 'react'
import JoditEditor from 'jodit-react';
import {useTranslation} from "react-i18next";
import { useDispatch , useSelector } from "react-redux";
import {getAllSolutions, addSolution, editSolution, removeSolution, switchStatusSolution} from '../redux/reducers/solutionsSlice';
import { Button, Space, Table, Switch, Popconfirm, notification, Form, Input, Modal, Image } from 'antd';
import { CheckCircleFilled , WarningOutlined} from '@ant-design/icons';


const Solutions = ({ placeholder }) => {

    const data = useSelector((state) => state.solutions);
    const [form] = Form.useForm();
    const user = useSelector((state) => state.user);
    const isAdmin = user.data[0].isAdmin;
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

    // jodit-editor
    const editorAz = useRef(null);
    const editorDe = useRef(null);
    const editorEn = useRef(null);
	  const [contentAz, setContentAz] = useState('');
    const [contentDe, setContentDe] = useState('');
    const [contentEn, setContentEn] = useState('');

    const config = useMemo(
      () => ({
          readonly: false, 
        }),
      []
    );
    // the-end-of-jodit-editor

    const columns = [
      {
        title: t('titles.image'),
        dataIndex: 'img',
        key: 'img',
        render: (text) => <Image src={text} style={{width: "100px", height: "auto"}}/>,
      },
      {
        title: t('titles.name'),
        dataIndex: `name_${lan}`,
        key: `name_${lan}`,
      },
      {
        title: t('titles.action'),
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            
            <button type="button" className="btn btn-primary me-3 ms-3" onClick={() => { showModal(record[`text_${lan}`]) }}>
                {t('titles.text')} <i className="fa fa-eye ms-1"></i>
            </button>

            { isAdmin &&  <Switch checked={record.status} onChange={(e) => { changeStatus(e, record.id) }} /> }

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
      obj = {...values, text_az: contentAz, text_de: contentDe, text_en: contentEn}
      obj.status = status;

      dispatch(addSolution({...obj}))
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
      setJodit(editedData);
      setStatus(editedData.status);
    }

    const editData = (values) => { 

      let obj = {};
      obj = {...values, text_az: contentAz, text_de: contentDe, text_en: contentEn}
      obj.status = status;
      dispatch(editSolution({id, data: {...obj}}))
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
      dispatch(switchStatusSolution({...editedData, status: e}))
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

      dispatch(removeSolution(id))
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
      emptyJodit();
    };

    const setJodit = (data) => {
      setContentAz(data.text_az);
      setContentDe(data.text_de)
      setContentEn(data.text_en)
    }

    const emptyJodit = () => {
      setContentAz('');
      setContentEn('');
      setContentDe('');
    }

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

    const showModal = (content) => {
      setModalContent(content);
      setOpen(true)
    }

    const footerText = () => {
      let text;
      const len = data.data.length;
      if (len === 0) text = t('texts.notPosts');
      else if (len === 1) text = `${len} ${t('texts.post')}`
      else text = `${len} ${t('texts.posts')}`  
      return text;
    }

    useEffect(()=>{
      dispatch(getAllSolutions())
      .unwrap()
      .then((originalPromiseResult) => {
        setLoading(false);
      })
    }, [])

    return (
      <>

        <Helmet>
          <title>{t('titles.pageName')} - {t('menu.item04')}</title>
        </Helmet>

        <Table id="table" title={() => ( <h6>{t('menu.item04')}</h6> )} footer={() => footerText() } columns={columns} dataSource={data.data} loading={loading}/>
        
        { isAdmin && 
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
              label={`${t('titles.image')}`}
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

            { locales.map((l, i) => ( 

              <Form.Item
                className="mt-5"
                key={i}
                label={`${t('titles.name')} - ${l.toUpperCase()}`}
                name={`name_${l}`}
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

            {/* jodit-editor */}

            <div className="mt-5">

              <p>{`${t('titles.text')} - ${locales[0].toUpperCase()}`}</p>
              
              <JoditEditor
                style={{minHeight: "400px"}}
                ref={editorAz}
                value={contentAz}
                config={config}
                tabIndex={1}
                onBlur={newContent => setContentAz(newContent)}
                onChange={newContent => { setContentAz(newContent) }}
              />

            </div>
            
            <div className="mt-5">

              <p>{`${t('titles.text')} - ${locales[1].toUpperCase()}`}</p>

              <JoditEditor
              
                ref={editorEn}
                value={contentEn}
                config={config}
                tabIndex={1}
                onBlur={newContent => setContentEn(newContent)}
                onChange={newContent => { setContentEn(newContent) }}
              />

            </div>

            <div className="mt-5">

              <p>{`${t('titles.text')} - ${locales[2].toUpperCase()}`}</p>

              <JoditEditor
                ref={editorDe}
                value={contentDe}
                config={config}
                tabIndex={1}
                onBlur={newContent => setContentDe(newContent)}
                onChange={newContent => { setContentDe(newContent) }}
              />

            </div>

            {/* the-end-of-jodit-editor */}

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
            title={t('titles.text')}
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
          >
            <div dangerouslySetInnerHTML={{__html: modalContent}}/>

          </Modal>

      </>  
    );

}
  
export default Solutions;