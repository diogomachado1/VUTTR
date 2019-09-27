import React, { useState, useCallback, useEffect } from 'react';

import { Container, ToolsList } from './styles';
import { Button, ButtonTerciary } from '~/components/Button';
import { CheckboxBossabox } from '~/components/Input/styles';

import SearchIcon from '~/assets/Icon-Search-2px.svg';
import PlusIcon from '~/assets/Icon-Plus-Circle-2px.svg';
import DeleteIcon from '~/assets/Icon-Delete-2px.svg';

import api from '~/services/api';
import InputWithIcon from '~/components/Input/input';
import FormModal from './FormModal';

export default function Main() {
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([]);
  const [searchWithTag, setSearchWithTag] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');
  const [editTool, setEditTool] = useState({});

  const loadTools = useCallback(async () => {
    const response = await api.get(`/tools`);
    setTools(response.data);
    setFilteredTools(response.data);
  }, []);

  useEffect(() => {
    loadTools();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadTools]);

  useEffect(() => {
    async function searchFunction() {
      if (searchWithTag) {
        const response = await api.get(`/tools?tag=${search}`);
        setFilteredTools(response.data);
      } else {
        const pat = new RegExp(`\\w*${search}\\w*`, 'gi');
        const filtered = tools.filter(item => item.title.match(pat));
        setFilteredTools(filtered);
      }
    }
    searchFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, searchWithTag]);

  function dismissForm() {
    setShowForm(false);
    loadTools();
  }

  function handleShowForm(tool) {
    if (tool) {
      setEditTool({ ...tool, tags: tool.tags.join(' ') });
    } else {
      setEditTool();
    }
    setShowForm(true);
  }

  async function handleRemoveTool(id) {
    try {
      await api.delete(`/tools/${id}`);
      loadTools();
    } catch (error) {
      console.tron.log(error);
    }
  }

  return (
    <Container>
      <h1>VTTUR</h1>
      <h2>Very Useful Tools to Remember</h2>
      <div>
        <span>
          <InputWithIcon
            debounceTimeout={500}
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar"
            icon={SearchIcon}
          />
          <CheckboxBossabox>
            Usar Tag
            <input
              type="checkbox"
              checked={searchWithTag}
              onChange={e => setSearchWithTag(e.target.checked)}
            />
            <span />
          </CheckboxBossabox>
        </span>
        <Button
          color="success"
          icon={PlusIcon}
          onClick={() => handleShowForm()}
        >
          Add
        </Button>
      </div>
      <ToolsList>
        {filteredTools.map(tool => (
          <li key={tool.id}>
            <div>
              <a href={tool.link}>{tool.title}</a>
              <ButtonTerciary
                onClick={() => handleShowForm(tool)}
                color="warning"
              >
                Editar
              </ButtonTerciary>
              <ButtonTerciary
                onClick={() => handleRemoveTool(tool.id)}
                icon={DeleteIcon}
                color="danger"
              >
                remover
              </ButtonTerciary>
            </div>
            <span>{tool.description}</span>
            <ul>
              {tool.tags.map(tag => (
                <li key={tag}>#{tag}</li>
              ))}
            </ul>
          </li>
        ))}
      </ToolsList>
      {showForm && (
        <FormModal
          showForm={showForm}
          editTool={editTool}
          dismissForm={dismissForm}
        />
      )}
    </Container>
  );
}

// const dispatch = useDispatch();
// const meetups = useSelector(state => state.meetup.meetups);

// const initFetch = useCallback(() => {
//   dispatch(meetupsRequest());
// }, [dispatch]);

// useEffect(() => {
//   initFetch();
// }, [initFetch]);

// <MeetupList>
//       {meetups.map(meetup => (
//         <li key={meetup.id}>
//           <Link to={`/details/${meetup.id}`}>
//             <span>{meetup.title}</span>
//             <span>{meetup.formatDate}</span>
//             <MdChevronRight size="30" />
//           </Link>
//         </li>
//       ))}
//     </MeetupList>
