import { observer } from 'mobx-react-lite';
import React from 'react'
import { Message } from 'semantic-ui-react';

interface Props {
    errors: any;
}

const ValidationErrors = ({errors}: Props) => {
  return (
    <Message>
        {errors && (
            <Message.List>
                {errors.map((err: [], i: any) => (
                    <Message.Item key={i}>{err}</Message.Item>
                ))}
            </Message.List>
        )}
    </Message>
  )
}

export default observer(ValidationErrors);
