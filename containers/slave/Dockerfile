FROM debian:8-slim

RUN apt-get update
RUN apt-get install -y openssh-client
RUN apt-get install -y openssh-server
RUN apt-get install -y openmpi-bin
RUN apt-get install -y mpi-default-dev
RUN apt-get install -y g++

RUN addgroup --system appuser 
RUN adduser --system --group appuser --shell /bin/bash
RUN echo "appuser:c23a9e1149256df365c7fb6add8bfc8b" | chpasswd
RUN chown appuser /etc/ssh/ssh_host_rsa_key

RUN mkdir root/.ssh
RUN chmod 700 /root/.ssh
COPY ./ssh_keys/id_rsa.pub /root/.ssh/authorized_keys
COPY ./ssh_keys/id_rsa.pub /root/.ssh/id_rsa.pub
COPY ./ssh_keys/id_rsa /root/.ssh/id_rsa
COPY ./ssh_keys/known_hosts /root/.ssh/known_hosts
RUN chmod 600 /root/.ssh/authorized_keys

USER appuser

RUN mkdir /home/appuser/.ssh
RUN chmod 700 /home/appuser/.ssh
COPY ./ssh_keys/id_rsa.pub /home/appuser/.ssh/authorized_keys
COPY ./ssh_keys/id_rsa.pub /home/appuser/.ssh/id_rsa.pub
COPY ./ssh_keys/id_rsa /home/appuser/.ssh/id_rsa
COPY ./ssh_keys/known_hosts /home/appuser/.ssh/known_hosts

USER root
RUN chmod 600 /home/appuser/.ssh/authorized_keys
RUN chown appuser /home/appuser/.ssh/*

RUN apt-get install -y make

COPY ./ssh_keys/ssh_host_ecdsa_key /etc/ssh/ssh_host_rsa_key
COPY ./ssh_keys/ssh_host_ecdsa_key.pub /etc/ssh/ssh_host_rsa_key.pub
RUN chmod 600 /etc/ssh/ssh_host_rsa_key

RUN apt-get install -y sudo

CMD service ssh start && tail -f /dev/null
