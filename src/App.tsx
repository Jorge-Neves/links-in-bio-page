import React, { FC, useState } from 'react';
import {
  Card,
  Box,
  Stack,
  Typography,
  Avatar,
  IconButton,
  Divider,
  Chip,
  Switch,
} from '@mui/material';

enum TabOptions {
  SocialMedia = 'Social Media',
  OnlineLEarning = 'Online Learning',
  LearningApps = 'Learning Apps',
  ProblemSolving = 'Problem Solving',
  Productivity = 'Productivity',
}

const App: FC = () => {
  const [currentTab, setCurrentTab] = useState<TabOptions>();

  return (
    <Stack>
      <Card>
        <Box sx={{ p: 2, display: 'flex' }}>
          <Avatar variant="rounded" src="avatar1.jpg" />
          <Stack spacing={0.5}>
            <Typography fontWeight={700}>Michael Scott</Typography>
            <Typography variant="body2" color="text.secondary">
              Scranton, PA
            </Typography>
          </Stack>
          <IconButton></IconButton>
        </Box>
        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
        >
          <Chip label="Active account" />
          <Switch />
        </Stack>
      </Card>
    </Stack>
  );
};

export default App;
